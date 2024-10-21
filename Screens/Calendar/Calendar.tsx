import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Item = {
  name: string;
  height: number;
  punchInTime?: string;
  punchOutTime?: string;
  totalTime?: string;
};

// Preload the icon font to avoid delay
const MemoizedIcon = React.memo(({ name, size, color }: { name: string, size: number, color: string }) => (
  <Icon name={name} size={size} color={color} />
));

// Memoized Card Component
const MemoizedCard = React.memo(({ item }: { item: Item }) => (
  <Card style={styles.card}>
    <Card.Content>
      <View style={styles.cardContent}>
        <Text style={item.punchInTime ? styles.presentText : styles.absentText}>
          {item.punchInTime ? item.name : 'Absent'}
        </Text>
        {item.punchInTime && (
          <View style={styles.row}>
            <View style={styles.iconWithText}>
              <MemoizedIcon name="clock-in" size={24} color="rgb(0, 41, 87)" />
              <Text style={styles.timeText}>{item.punchInTime}</Text>
              <Text style={styles.timeTextLabel}>Clock In Time</Text>
            </View>
            <View style={styles.iconWithText}>
              <MemoizedIcon name="clock-out" size={24} color="rgb(0, 41, 87)" />
              <Text style={styles.timeText}>{item.punchOutTime}</Text>
              <Text style={styles.timeTextLabel}>Clock Out Time</Text>
            </View>
            <View style={styles.iconWithText}>
              <MemoizedIcon name="clock" size={24} color="rgb(0, 41, 87)" />
              <Text style={styles.timeText}>{item.totalTime} hours</Text>
              <Text style={styles.timeTextLabel}>Total Hours</Text>
            </View>
          </View>
        )}
      </View>
    </Card.Content>
  </Card>
));

const Schedule: React.FC = () => {
  const [items, setItems] = useState<{ [key: string]: Item[] }>({});

  useEffect(() => {
    Icon.loadFont(); // Preload icons to optimize loading
  }, []);

  const calculateTotalTime = useCallback((punchIn: string, punchOut: string) => {
    const [inHours, inMinutes] = punchIn.split(':').map(Number);
    const [outHours, outMinutes] = punchOut.split(':').map(Number);

    if (isNaN(inHours) || isNaN(inMinutes) || isNaN(outHours) || isNaN(outMinutes)) {
      return '0.00'; // Return 0 if any time is invalid
    }

    const totalHours = outHours - inHours;
    const totalMinutes = outMinutes - inMinutes;
    const totalTimeInHours = totalHours + totalMinutes / 60;
    return totalTimeInHours.toFixed(2); // Format to two decimal places
  }, []);

  const loadItems = useCallback((day: any) => {
    setTimeout(() => {
      const today = new Date().getTime();
      const newItems: { [key: string]: Item[] } = {};
      for (let i = -15; i <= 0; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        if (time <= today) {
          const strTime = timeToString(time);
          if (!items[strTime]) {
            const isPresent = Math.random() > 0.5; // Random 50% chance of presence
            const punchInTime = isPresent ? '09:00 AM' : '';
            const punchOutTime = isPresent ? '05:00 PM' : '';
            const totalTime = isPresent ? calculateTotalTime(punchInTime, punchOutTime) : '';
            newItems[strTime] = [{
              name: 'Date - ' + strTime,
              height: 0,
              punchInTime,
              punchOutTime,
              totalTime,
            }];
          }
        }
      }
      setItems((prevItems) => ({ ...prevItems, ...newItems }));
    }, 1000);
  }, [calculateTotalTime, items]);

  const renderItem = useCallback((item: Item) => <MemoizedCard item={item} />, []);

  const today = timeToString(Date.now());

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={today}
        renderItem={renderItem}
        minDate={'2022-01-01'}
        maxDate={today}
        theme={{
          agendaDayTextColor: 'rgb(0, 41, 87)',
          agendaDayNumColor: 'rgb(0, 41, 87)',
          agendaTodayColor: 'green',
          agendaKnobColor: 'rgb(0, 41, 87)',
          backgroundColor: '#f8f8f8',
          calendarBackground: 'white',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: 'rgb(0, 41, 87)',
          selectedDayTextColor: 'white',
          todayTextColor: 'white',
          dayTextColor: 'rgb(0, 41, 87)',
          textDisabledColor: '#d9e1e8',
          selectedDotColor: '#ffffff',
          arrowColor: 'rgb(0, 41, 87)',
          monthTextColor: 'rgb(0, 41, 87)',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
        }}
      />
    </View>
  );
};

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  iconWithText: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginTop: 5,
  },
  timeTextLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
    fontWeight: 'bold',
  },
  presentText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  absentText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Schedule;

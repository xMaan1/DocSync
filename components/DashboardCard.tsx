import { View, Text } from 'react-native';
import { CommonStyles } from '../types';

export default function DashboardCard({ 
  number, 
  title, 
  isBlueNumber, 
  isLargeCard 
}: { 
  number: string | number; 
  title: string; 
  isBlueNumber: boolean;
  isLargeCard: boolean;
}) {
  const cardStyle = isLargeCard ? CommonStyles.card2 : CommonStyles.card;
  const numberStyle = isBlueNumber ? CommonStyles.cardNumber1 : CommonStyles.cardNumber2;

  return (
    <View style={cardStyle}>
      <Text style={numberStyle}>{number}</Text>
      <Text style={CommonStyles.cardTitle}>{title}</Text>
    </View>
  );
}
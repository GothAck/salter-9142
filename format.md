Offset	Type		Data
00		UInt8		Profile
01		UInt8		Height
02		UInt8		Age
03		UInt8		-- Fitness? 11 (17) 0001,0001 fitness << 4 + malebool1?
04-05	UInt16LE	Weight in 0.1lb
06-07	UInt16LE	BMI * 10
08-09	UInt16LE	Fat % * 10
10-11	UInt16LE	Water % * 10
12-13	UInt16LE	Muscle kg * 10
14		UInt8		Visceral
15		UInt8		-- Fitness 0-2? 00 (0) or Padding
16-17	UInt16LE	BMR
18		UInt8		Year YY
19		UInt8		Month
20		UInt8		Day
21		UInt8		Hour
22		UInt8		Minute
23		UInt8		Second

Age			26 		years
Weight		96.0	kg
			211.644	lb
BMI			27.2	BMI
Fat			25.0	%
Water		54.8	%
Muscle		40.4	%
Visceral	12		%
BMR			2145	kcal	16-17
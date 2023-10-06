import imagePath from '../constants/imagePath';


// we export a const to import it as {const} and use it
export default
    {
        categoryType: [
            { index: 2, name: "EMERGENCY", src: imagePath.emergency, text: 'Emergency' },
            { index: 3, name: "MEDICAL", src: imagePath.medical, text: 'Medical' },
            { index: 1, name: "GIVE_AWAY_ITEM", src: imagePath.giveAwayItem, text: 'Give Away Items' },
            { index: 8, name: "SOCIAL", src: imagePath.social, text: 'Social' },
            { index: 5, name: "ROAD_ASSIST", src:imagePath.roadAssist, text: 'Road Assist' },
            { index: 4, name: "RIDE_DELIVER", src: imagePath.ride, text: 'Ride/Deliver' },
            { index: 7, name: "LOST_AND_FOUND", src: imagePath.lostAndFound, text: 'Lost And Found' },
            { index: 6, name: "ITEM_NEEDED", src: imagePath.itemNeeded, text: 'Item Needed' },
            { index: 9, name: "GENERAL", src: imagePath.general, text: 'General' },
        ],
        radius: [
            { key: 0, value: 100, number: '100', text: 'm' },
            { key: 1, value: 200, number: '200', text: 'm' },
            { key: 2, value: 300, number: '300', text: 'm' },
            { key: 3, value: 400, number: '400', text: 'm' },
            { key: 4, value: 500, number: '500', text: 'm' },
            { key: 5, value: 600, number: '600', text: 'm' },
            { key: 6, value: 700, number: '700', text: 'm' },
            { key: 7, value: 800, number: '800', text: 'm' },
            { key: 8, value: 900, number: '900', text: 'm' },
            { key: 9, value: 1000, number: '', text: 'km' },
            { key: 10, value: 2000, number: '2', text: 'km' },
            { key: 11, value: 3000, number: '3', text: 'km' },
            { key: 12, value: 4000, number: '4', text: 'km' },
            { key: 13, value: 5000, number: '5', text: 'km' },
            { key: 14, value: 6000, number: '6', text: 'km' },
            { key: 15, value: 7000, number: '7', text: 'km' },
            { key: 16, value: 8000, number: '8', text: 'km' },
            { key: 17, value: 9000, number: '9', text: 'km' },
            { key: 18, value: 10000, number: '10', text: 'km' },
            { key: 19, value: 11000, number: '11', text: 'km' },
            { key: 20, value: 12000, number: '12', text: 'km' },
            { key: 21, value: 13000, number: '13', text: 'km' },
            { key: 22, value: 14000, number: '14', text: 'km' },
            { key: 23, value: 15000, number: '15', text: 'km' },
            { key: 24, value: 16000, number: '16', text: 'km' },
            { key: 25, value: 17000, number: '17', text: 'km' },
            { key: 26, value: 18000, number: '18', text: 'km' },
            { key: 27, value: 19000, number: '19', text: 'km' },
            { key: 28, value: 20000, number: '20', text: 'km' },
            { key: 29, value: 21000, number: '21', text: 'km' },
            { key: 30, value: 22000, number: '22', text: 'km' },
            { key: 31, value: 23000, number: '23', text: 'km' },
            { key: 32, value: 24000, number: '24', text: 'km' },
            { key: 33, value: 25000, number: '25', text: 'km' },
            { key: 34, value: 26000, number: '26', text: 'km' },
            { key: 35, value: 27000, number: '27', text: 'km' },
            { key: 36, value: 28000, number: '28', text: 'km' },
            { key: 37, value: 29000, number: '29', text: 'km' },
            { key: 38, value: 30000, number: '30', text: 'km' },
            { key: 39, value: 31000, number: '31', text: 'km' },
            { key: 40, value: 32000, number: '32', text: 'km' },
            { key: 41, value: 33000, number: '33', text: 'km' },
            { key: 42, value: 34000, number: '34', text: 'km' },
            { key: 43, value: 35000, number: '35', text: 'km' },
            { key: 44, value: 36000, number: '36', text: 'km' },
            { key: 45, value: 37000, number: '37', text: 'km' },
            { key: 46, value: 38000, number: '38', text: 'km' },
            { key: 47, value: 39000, number: '39', text: 'km' },
            { key: 48, value: 40000, number: '40', text: 'km' },
            { key: 49, value: 41000, number: '41', text: 'km' },
            { key: 50, value: 42000, number: '42', text: 'km' },
            { key: 51, value: 43000, number: '43', text: 'km' },
            { key: 52, value: 44000, number: '44', text: 'km' },
            { key: 53, value: 45000, number: '45', text: 'km' },
            { key: 54, value: 46000, number: '46', text: 'km' },
            { key: 55, value: 47000, number: '47', text: 'km' },
            { key: 56, value: 48000, number: '48', text: 'km' },
            { key: 57, value: 49000, number: '49', text: 'km' },
            { key: 58, value: 100000, number: '100', text: 'km' },
            { key: 59, value: 200000, number: '200', text: 'km' },
            { key: 60, value: 300000, number: '300', text: 'km' },
            { key: 61, value: 400000, number: '400', text: 'km' },
            { key: 62, value: 500000, number: '500', text: 'km' },
            { key: 63, value: 'Unlimited', number: ' ', text: 'Unlimited' },
        ],
        expireDate: [
            { key: 0, value: 1800000, number: '30', text: 'minutes ago' },
            { key: 1, value: 3600000, number: '', text: '1 hour ago' },
            { key: 2, value: 7200000, number: '2', text: '2 hour ago' },
            { key: 3, value: 10800000, number: '3', text: '3 hour ago' },
            { key: 4, value: 14400000, number: '4', text: '4 hour ago' },
            { key: 5, value: 18000000, number: '5', text: '5 hour ago' },
            { key: 6, value: 21600000, number: '6', text: '6 hour ago' },
            { key: 7, value: 25200000, number: '7', text: '7 hour ago' },
            { key: 8, value: 28800000, number: '8', text: '8 hour ago' },
            { key: 9, value: 32400000, number: '9', text: '9 hour ago' },
            { key: 10, value: 36000000, number: '10', text: '10 hour ago' },
            { key: 11, value: 39600000, number: '11', text: '11 hour ago' },
            { key: 12, value: 43200000, number: '12', text: '12 hour ago' },
            { key: 13, value: 86400000, number: '', text: 'one days ago' },
            { key: 14, value: 172800000, number: '2', text: '2 days ago' },
            { key: 15, value: 259200000, number: '3', text: '3 days ago' },
            { key: 16, value: 345600000, number: '4', text: '4 days ago' },
            { key: 17, value: 432000000, number: '5', text: '5 days ago' },
            { key: 18, value: 518400000, number: '6', text: '7 days ago' },
            { key: 19, value: 604800000, number: '', text: '1 weeks ago' },
            { key: 20, value: 1209600000, number: '2', text: '2 weeks ago' },
            { key: 21, value: 1814400000, number: '3', text: '3 weeks ago' },
            { key: 22, value: 2592000000, number: '', text: 'one month ago' },

        ],
    }


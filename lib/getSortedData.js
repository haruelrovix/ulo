const getFilteredData = data => data.filter(obj => obj.active);

const getGroupedData = data =>
  data.reduce((total, obj) => {
    let key = obj.day_of_week;
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(obj);

    return total;
  }, {});

const getMaxDiscount = data =>
  Math.max.apply(Math, data.map(obj => obj.discount));

const getDate = (obj, key) => new Date('1970/01/01 ' + obj[key]);

const getSortedData = ({data}) => {
  const filteredData = getFilteredData(data);

  const groupedData = getGroupedData(filteredData);

  let sortedData = {};
  Object.entries(groupedData).map(([key, value]) => {
    const deals = value.sort(
      (a, b) => getDate(a, 'start_time') - getDate(b, 'start_time'),
    );

    sortedData[key] = {
      deals,
      maxDiscount: getMaxDiscount(deals),
    };
  });

  return sortedData;
};

export default getSortedData;

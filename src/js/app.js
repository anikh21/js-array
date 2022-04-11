// line break function
function lb(color = 'black', title, New = false) {
  if (!title) {
    console.log(
      '%c**************************************************',
      `color:${color}`
    );
  } else {
    if (New) {
      console.log('');
      console.log(
        `%c************************* ${title} *************************`,
        `color:${color || 'green'};font-size: 20px`
      );
      console.log('');
    } else {
      console.log(
        `%c************************* ${title} *************************`,
        `color:${color}`
      );
    }
  }
}

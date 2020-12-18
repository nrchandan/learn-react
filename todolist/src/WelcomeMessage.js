// function WelcomeMessage({name1, name2, name3}) {
//   return <p>Hello {name1}! Hi {name2}! How are you doing {name3}</p>
// }

function WelcomeMessage({children, setFriendCount, count}) {
  // setFriendCount(count+1);
  setFriendCount(1);
  return <p>Hello {children}!</p>
}

export default WelcomeMessage;

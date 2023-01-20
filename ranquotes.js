var quotes = [
  'Telling an introvert to go to a party is like telling a saint to go to Hell. -Criss Jami',
  'Everyone has a sense of humor. If you don\'t laugh at jokes you probably laugh at opinions. -Criss Jami',
  'Never lie in bed at night asking yourself questions you can\'t answer. -Charles M. Schulz',
  'If no one knows when a person is going to die, how can we say he died prematurely? -George Carlin',
  'The best thing about a boolean is even if you are wrong, you are only off by a bit. -Anonymous',
   'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization. -Gerald Weinberg',
   'There are two ways to write error-free programs only the third one works. -Alan J. Perlis',
   'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. -Martin Golding',
   'A good programmer is someone who always looks both ways before crossing a one-way street. -Doug Linder',
   'Computers do not solve problems, they execute solutions. -Anonymous',
   'Profanity is the one language all programmers know best. -Anonymous',
   'Black holes are where God divided by zero. -Steven Wright',
   'I love deadlines. I love the whooshing noise they make as they go by. -Douglas Adams',
   'Some people never go crazy. What truly horrible lives they must lead. -Charles Bukowski',
   'The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it. -Terry Pratchett'
 ]

function newQuote(){
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

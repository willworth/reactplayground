import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from './intro';
import Comp2 from './comp2';
import Comp3 from './comp3';
import Counter from './counter';

function main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/comp2" component={Comp2} />
        <Route path="/comp3" component={Comp3} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </main>
  );
}

export default main;

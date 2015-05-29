import React from "react";
import Highlight from "./Highlight.jsx";
import {Plotypus, PlotypusRow, Chart, GroupedBarLayer, GridLayer} from "../../src/js/Plotypus.jsx";

class ChartsAndLayers extends React.Component {
  genData(count, values, cats, series) {
    /*
      count (Number):           How many datapoints you want.
      values (Array(Number)):   Must be of length 2. Min and Max.
      cats (Array(String)):     Set of all possible categories.
      series (Array(String)):   Set of all possible series.
    */
    return _.times(count, function(n){
      return {
        value: (values[1] - values[0]) * Math.random(),
        category: n,
        series: null
      }
    })
  }
  render() {
    var data = this.genData(8, [0, 8]);
    console.log(data);
    return (
      <div>
        <h3>Charts and Layers</h3>
        <p>The chart component is obviously the most important of the components, and structurally, they are unique in that they have <strong>layers</strong>. Layers are graphical elements that stack on top of each other inside a Chart. Currently, only Charts have layers, but over time this may change.</p>
        <p><code>GridLayer</code> and <code>GroupedBarLayer</code> are the first layers we'll encounter in this guide, and perfectly demonstrate the concept of layers. For now, we will simplify our layout to only include one Component: <code>Chart</code>, leaving only one <code>PlotypusRow</code> in our markup.</p>
        <Plotypus>
          <PlotypusRow>
            <Chart>
              <GridLayer 
                xMax={ 8 }
                yMax={ 8 }/>
              <GroupedBarLayer 
                barWidth={ 0.3 }
                max={ 8 }
                min={ 0 }
                categoryField="category"
                seriesField="series"
                valueField="value"
                data={ data }/>
            </Chart>
          </PlotypusRow>
        </Plotypus>
        <Highlight className="solarized_light">
{ 
`<Plotypus>
  <PlotypusRow>
    <Chart>
      <GridLayer 
        xMax={ 8 }
        yMax={ 8 }/>
      <GroupedBarLayer 
        barWidth={ 0.3 }
        max={ 8 }
        min={ 0 }
        categoryField="category"
        seriesField="series"
        valueField="value"
        data={ data }/>
    </Chart>
  </PlotypusRow>
</Plotypus>` 
}
        </Highlight>
      </div>
    )
  }
}

export default class Guide extends React.Component {
  genData(count, values, cats, series) {
    /*
      count (Number):           How many datapoints you want.
      values (Array(Number)):   Must be of length 2. Min and Max.
      cats (Array(String)):     Set of all possible categories.
      series (Array(String)):   Set of all possible series.
    */
    return _.times(count, function(n){
      return {
        value: (values[1] - values[0]) * Math.random(),
        category: _.sample(cats),
        series: _.sample(series)
      }
    })
  }
  render() {
    var data = this.genData(12, [0, 10], ["wat", "derp", "honk"], ["eh"]);
    return (
      <div className="Guide split-pane">
        <div className="sidebar">
          <div>
            <h4>Derp</h4>
            <ul>
              <li><a>Structure</a></li>
              <li><a>PlotypusRow</a></li>
            </ul>
          </div>
        </div>
        <div className="main">
          <section>
            <h2>Structure</h2>
            <div>
              <p>Building out components in Plotypus is easy. Plotypus charts are laid out in a tabular manner. Think, way back then, when we still used tables to lay out websites—that's what we're doing now with the charts.</p>
              <p>It sounds atrocious, I know, but it helps amazingly with composing your charts. You can have one axis, two, none, and even 4, if you're insane.</p>
              <Highlight className="solarized_light">
                { 
                  `<Plotypus>
  <PlotypusRow>
    <Component1 />
    <Component2 /> <!-- Components here are just placeholders. They can be anything from an Axis to a Chart, to a Legend. -->
  </PlotypusRow>
  <PlotypusRow>
    <Null /> <!-- Null is just like any other Component, except it simply doesn't display anything. -->
    <Component3 />
  </PlotypusRow>
</Plotypus>` }
              </Highlight>

              <p>All Plotypus components that aren't structural like PlotypusRow, act like table cells. And generally, they all behave identically, with the exception of the Chart component.</p>
            </div>
            <ChartsAndLayers />
          </section>
          <Plotypus>
            <PlotypusRow>
              <Chart>
                <GroupedBarLayer 
                  groupOffset={ 1.2 } 
                  barWidth={ 0.1 }
                  max={ 10 }
                  min={ 0 }
                  categoryField="category"
                  seriesField="series"
                  valueField="value"
                  data={ data } />
              </Chart>
            </PlotypusRow>
          </Plotypus>
        </div>
      </div>
    )
  }
}
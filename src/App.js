import logo from './logo.svg';
import './App.css';

function App() {
const menuData = [
    {
      name: "HomePage",
      url: "/Home"
    },

    {
      name: "Left dropdown",
      children: [
        {
          name: "Any page",
          url: "/page/menu-4-1"
        },
        {
          name: "Second Level",
          children: [
            {
              name: "Another Page",
              url: "/page/menu-4-3-1"
            },
            {
              name: "Any Page",
              url: "/page/menu-4-3-2"
            },
            {
              name: "Third level⯆",
              children: [
                {
                  name: "Any Page",
                  url: "/page/menu-4-3-3-1-1"
                  
                },
                {
                  name: "Another Page",
                  url: "/page/menu-4-3-3-1-1"
                    }
                
                
              ]
            }
          ]
        },

        {
          name: "Another Page",
          url: "/page/menu-4-2"
        },
      
          
      ]

    },

    
    {
      name: "Mega Menu",
      children: [
        {
          name: "Mega Menu",
          url: "/page/menu-1-1"
        }
      ]
    },
    
    {
      name: "Any Page",
      url: "/page/menu-2"
    },

    {
      name: "Right dropdown",
      children: [
        {
          name: "Any-Page",
          url: "/page/menu-4-1"
        },
        {
          name: "Second-level",
          url: "/page/menu-4-2"
        },
        {
          name: "Another- page⯆",
          children: [
            {
              name: "Another- page",
              url: "/page/menu-4-3-1"
            },
            {
              name: "Any- page",
              url: "/page/menu-4-3-2"
            },
            {
              name: "Third level",
              children: [
                {
                  name: "Any-page",
                  children: [
                    {
                      name: "Any-page",
                      url: "/page/menu-4-3-3-1-1"
                    }
                  ]
                },
                {
                  name: "Another-page",
                  url: "/page/menu-4-3-3-2"
                }
              ]
            }
          ]
        }
      ]
    }
  
  return (
    <div className="App">
      <Router>
        <MultilevelMenu data={menuData} />
        <Switch> 
          <Route path="/page/:slug">
             <Page />
          </Route>
          <Route path="/Home">
             <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

    
    
    
    
    
    

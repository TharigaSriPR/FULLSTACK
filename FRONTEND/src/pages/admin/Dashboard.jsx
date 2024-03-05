import '../../assets/css/adminrow.css'
const Dashboard = ({ color, icon, number, desc }) => {
  const styles = {
    wrapper: {
      position: 'relative'
    },
    heading: {
      margin: '25px 0',
      fontSize: '24px'
    },
    dashboardStat: {
      position: 'relative',
      display: 'block',
      margin: '0 0 25px',
      overflow: 'hidden',
      borderRadius: '4px'
    },
    visual: {
      width: '80px',
      height: '80px',
      display: 'block',
      float: 'left',
      paddingTop: '10px',
      paddingLeft: '15px',
      marginBottom: '15px',
      fontSize: '35px',
      lineHeight: '35px',
      textAlign: 'center',
      color: '#fff',
      opacity: '0.1'
    },
    details: {
      position: 'absolute',
      right: '15px',
      padding: '0 15px',
      color: '#fff'
    },
    number: {
      paddingTop: '25px',
      textAlign: 'right',
      fontSize: '34px',
      lineHeight: '36px',
      letterSpacing: '-1px',
      marginBottom: '0',
      fontWeight: '300'
    },
    desc: {
      textTransform: 'capitalize',
      textAlign: 'right',
      fontSize: '16px',
      letterSpacing: '0',
      fontWeight: '300'
    }
  };

  const backgroundColor = {
    blue: '#337ab7',
    hoki: '#67809F',
    red: '#e7505a',
    purple: '#8E44AD'
  }[color] || '#fff';

  return (
    <div className="dashboard-stat" style={{ ...styles.dashboardStat, backgroundColor }}>
      <div className="visual" style={styles.visual}>
        <i className={`fa fa-${icon}`}></i>
      </div>
      <div className="details" style={styles.details}>
        <div className="number" style={styles.number}>
          <span>{number}</span>
        </div>
        <div className="desc" style={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="wrapper container">
      <div className="row">
        <div className="col-lg-12">
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </div>
      </div>
      <div className="row " style={{ marginLeft: '150px' }}>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 justify-end">
          <Dashboard color="red" icon="4" number="12" desc="Completed order" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Dashboard color="blue" icon="bar-chart-o" number="6" desc="New Order" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Dashboard color="hoki" icon="credit-card" number="+ 53%" desc="Popularity" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Dashboard color="purple" icon="comments" number="7" desc="New Feedback" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

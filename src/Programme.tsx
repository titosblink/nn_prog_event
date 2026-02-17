import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

interface Programme {
  id: number;
  daycode: number;
  progtime: string;
  title: string;
}

interface Day {
  id: number;
  daynumber: number;
  daydate: string;
  daycode: number;
}

function Programme() {
  const { daycode } = useParams<{ daycode: string }>();

  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [day, setDay] = useState<Day | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!daycode) return;

    const fetchData = async () => {
      try {
        const [progRes, dayRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/programmes/${daycode}`),
          axios.get(`http://localhost:5000/api/day/${daycode}`),
        ]);

        setProgrammes(progRes.data);
        setDay(dayRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [daycode]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <div className="notification-wrapper">
          <div className="container-fluid">
            <div className="title-wrapper pt-30">
              <center>
                <img src="/assets/images/navylogo.png" alt="logo" />
                <h2>NN Navy Week</h2>
                <br />
                <Link to="/home">
                  <i className="lni lni-home"></i>
                </Link>
              </center>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <br />
                    <h4>Programme of the day</h4>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="breadcrumb-wrapper">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          {day
                            ? `Day ${day.daynumber} | ${day.daydate}`
                            : `Day ${daycode}`}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-style">
              {programmes.map((prog) => (
                <div className="single-notification" key={prog.id}>
                  <div className="notification">
                    <div className="content">
                      <h6>{prog.title}</h6>
                      <span className="text-sm text-medium text-gray">
                        <i className="lni lni-timer" /> {prog.progtime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default Programme;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

interface Day {
  id: number;
  daynumber: number;
  daydate: string;
  daycode: number;
}

function Home() {
  const [days, setDays] = useState<Day[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDays = async () => {
      try {
        const res = await axios.get<Day[]>("http://localhost:5000/api/days");
        setDays(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDays();
  }, []);

  if (loading) return <div>Loading days...</div>;

  return (
    <>
      <div>
        <div className="notification-wrapper">
          <div className="container-fluid">
            <div className="title-wrapper pt-30">
              <center>
                <img src="/assets/images/navylogo.png" alt="logo" />
                <h2>Programme of Event</h2>
              </center>
            </div>

            <div className="row">
              {days.map((day) => (
                <div
                  key={day.id}
                  className="col-xl-3 col-lg-4 col-sm-6"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/programme/${day.daycode}`, { state: day })
                  }
                >
                  <div className="icon-card mb-30">
                    <div className="icon active">
                      <i className="lni lni-calendar" />
                    </div>
                    <div className="content">
                      <h6 className="mb-10">Day {day.daynumber}</h6>
                      <h3 className="text-bold mb-10">{day.daydate}</h3>
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

export default Home;

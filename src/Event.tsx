import React, { useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const apiService = axios.create({
  baseURL: "https://pre.venti.com.ar",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface Event {
  name: string;
  shortDescription: string;
  promoImg: string;
}

function Event() {
  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(true);
  const { urlName } = useParams();

  const getEvent = async () => {
    setLoading(true);

    const { data }: any = await apiService.get(`/api/event/name/${urlName}`);
    setEvent(data.event);
    setLoading(false);
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;
  return (
    <div>
      <Helmet>
        <title>{event.name}</title>
        <meta property="og:title" content={event.name} />
        <meta property="og:description" content={event.shortDescription} />
        <meta property="og:image" content={event.promoImg} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <button onClick={getEvent}>Get Event</button>
      <p>{JSON.stringify(event)}</p>
    </div>
  );
}

export default Event;

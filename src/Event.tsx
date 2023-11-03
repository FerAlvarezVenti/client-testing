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

  useEffect(() => {
    if (!event) return;
    const { promoImg, name, shortDescription } = event;

    const previewElement = document.getElementById("event-preview");
    previewElement!.innerHTML = `
      <img src="${promoImg}" alt="${name}" />
      <h3>${name}</h3>
      <p>${shortDescription}</p>
    `;

    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", name);
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", shortDescription);
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", promoImg);
    document.head.appendChild(ogImage);
  }, [event]);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <div id="event-preview">
      <Helmet>
        <title>{event.name}</title>
      </Helmet>
      <button onClick={getEvent}>Get Event</button>
      <p>{JSON.stringify(event)}</p>
    </div>
  );
}

export default Event;

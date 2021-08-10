import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import { Badge } from "@material-ui/core";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = (props) => {
  return (
    <ContentModal className="media" media_type={props.media_type} id={props.id}>
      <Badge
        badgeContent={props.vote_average}
        color={props.vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={props.poster ? `${img_300}/${props.poster}` : unavailable}
        alt={props.title}
      />
      <b className="title">{props.title}</b>
      <span className="subTitle">
        {props.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{props.date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;

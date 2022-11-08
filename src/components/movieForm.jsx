import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovies, saveMovie } from "../services/fakeMovieService";
import { withRouter } from "react-router";
import { redirect } from "react-router-dom";
import { replace } from "lodash";

class MovieForm extends Form {
  username = React.createRef();

  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number in Stock")
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number()
      .required()
      .label("Daily Rental Rate")
      .min(0)
      .max(10),
  };

  componentDidMount() {
    let id = "5b21ca3eeb7f6fbccd471816";
    // let { navigate } = this.props;

    const genres = getGenres();
    this.setState({ genres });

    const movieId = id; // issue is here how to use id of params of match in v6
    if (movieId === "new") return;

    const movie = getMovies(movieId);

    // if (!movie) return <redirect to="/not-found" />; // here also using history will not valid
    // if (!movie) return navigate("/not-found", { replace: true }); // here also using history will not valid
    // if (!movie) return this.props.history.replace("/not-found");// here also using history will not valid
    // this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    // return <redirect to="/movies" />;
    // this.navigate("/movies"); // here also history
    // this.props.history.push("/movies"); // here also history
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

// export default withNavigate;

export default MovieForm;

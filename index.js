import express from "express";
import axios from "axios";
import bodyparser from "body-parser";

function get_date_time() {
    var dateraw = new Date();

    var day = dateraw.getDay();
    var date = dateraw.getDate();
    var year = dateraw.getFullYear();
    var month = dateraw.getMonth();

    var daystr = '';
    var monthstr = '';

    switch (day) {
        case 0:
            daystr = 'Sunday';
            break;
        case 1:
            daystr = 'Monday';
            break;
        case 2:
            daystr = 'Tuesday';
            break;
        case 3:
            daystr = 'Wednesday';
            break;
        case 4:
            daystr = 'Thursday';
            break;
        case 5:
            daystr = 'Friday';
            break;
        case 6:
            daystr = 'Saturday';
            break;
        default:
            break;
    }

    switch (month) {
        case 0:
            monthstr = 'January';
            break;
        case 1:
            monthstr = 'February';
            break;
        case 2:
            monthstr = 'March';
            break;
        case 3:
            monthstr = 'April';
            break;
        case 4:
            monthstr = 'May';
            break;
        case 5:
            monthstr = 'June';
            break;
        case 6:
            monthstr = 'July';
            break;
        case 7:
            monthstr = 'August';
            break;
        case 8:
            monthstr = 'September';
            break;
        case 9:
            monthstr = 'October';
            break;
        case 10:
            monthstr = 'November';
            break;
        case 11:
            monthstr = 'December';
            break;

        default:
            break;
    }
    var date_time = { day: daystr, month: monthstr, date: date, year: year };

    return date_time;
}

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

const api_key = "vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6";

app.get("/", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/home.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=50");
        var result2 = response2.data;
        var result = response.data;

        console.log(response.data);

        res.render("home.ejs", { date_time: get_date_time(), content: result, content2: result2 });
    } catch (error) {

    }
})

app.get("/world", async (req, res) => {
    var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
    var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=50");

    var result2 = response2.data;
    var result = response.data;

    res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2 });
})

app.get("/world/asia", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=100");
        var result2 = response2.data;
        var result = response.data;
        res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2, keyword: "Asia Pacific" });
    } catch (error) {
        console.log(error);
    }
})
app.get("/world/america", async (req, res) => {
    var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
    var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=100");
    var result2 = response2.data;
    var result = response.data;
    res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2, keyword: "Americas" });
})
app.get("/world/europe", async (req, res) => {
    var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
    var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=100");
    var result2 = response2.data;
    var result = response.data;
    res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2, keyword: "Europe" });
})
app.get("/world/africa", async (req, res) => {
    var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
    var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=100");
    var result2 = response2.data;
    var result = response.data;
    res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2, keyword: "Africa" });
})
app.get("/world/middle-east", async (req, res) => {
    var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
    var response2 = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&limit=100");
    var result2 = response2.data;
    var result = response.data;
    res.render("world.ejs", { date_time: get_date_time(), content: result, content2: result2, keyword: "Middle East" });
})

app.get("/business", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("business.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/arts", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("arts.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/technology", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("technology.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/politics", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("politics.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/travel", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("travel.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/health", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("health.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/movies", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("movies.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/fashion", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("fashion.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/food", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6");
        var result = response.data;

        res.render("food.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.get("/search", async (req, res) => {
    try {
        var response = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&sort=newest");
        var result = response.data;

        res.render("search.ejs", { date_time: get_date_time(), content: result });
    } catch (error) {
        console.log(error);
    }
})

app.post("/search", async (req, res) => {
    console.log(req.body);

    var page = req.body.page || 1;

    try {
        var response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.body.query}&api-key=vqiTSo6dodjWPj4beyuCvhdqqwaNHSq6&sort=relevance&page=${page - 1}`);
        var result = response.data;

        res.render("search.ejs", { date_time: get_date_time(), content: result, topic: req.body.query, page: page });
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server running at port : ${port}`);
})
import ajax from 'superagent';

import Loading from '../../components/loading/Loading';
import Info from '../../components/info/Info';
import Resume from '../../components/resume/Resume';
import Mentor from '../../components/mentor/Mentor';
import Comments from '../../components/comments/Comments';
import Date from '../../components/date/Date';
import Call from '../../components/call/Call';

class Profile extends React.Component {
    static propTypes = {
        children: React.PropTypes.node
    }

    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            mentorId: this.props.params.mentorId,
            info: {
                id: "",
                avatar: "",
                gender: "",
                nick_name: "",
                latest_work: "",
                industrys: []
            },
            call: {},
            resume: {
                works: [],
                edus: []
            },
            mentor: {},
            comments: {
                commentsData: [],
                count: 0
            }
        };

        this.fetchingData = this.fetchingData.bind(this);
        this.buildState = this.buildState.bind(this);
    }

//  fetch data 成功后的回调函数
// setState
// 将 isloading 改为 false

    buildState(data) {
        this.setState({
            isloading: false,
            info:{
                id: data.id,
                avatar: data.avatar_url,
                gender: data.gender_description,
                nick_name: data.nick_name,
                latest_work: data.latest_work,
                industrys: data.industrys
            },
            resume: {
                works: data.workinfos,
                edus: data.eduinfos
            },
            mentor: {
                gender: data.gender_description,
                text: data.bio
            },
            comments: {
                count: data.comments_count,
                commentsData: data.comments
            }
        });
    }

    fetchingData(url) {
        ajax.get(url)
            .end((error, response) => {
                if( !error && response ) {
                    let data = response.body.data;
                    console.log("set state kkkkkkk");

                    this.buildState(data);

                    console.log('data nnnnnnnnnn');
                } else {
                console.error(`Error fetching ${name} `, error);
             }
        });
    }

    componentWillMount () {

        const baseURL = '/api/mentors';
        const id = this.props.params.mentorId;

        let url = baseURL+ '/' +id;
        this.fetchingData(url);
    }

    render() {
        console.log("render started");
        console.log(this.state.isloading);

        let content = this.state.isloading ? (<Loading />) : (
            <div>
                <Info data={this.state.info} />
                <Call />
                <Resume data={this.state.resume} />
                <Mentor data={this.state.mentor} />
                <Comments data={this.state.comments} {...this.props} />
                <Date />
            </div>
            );
        return (
            <div>
                {content}
            </div>
            );
    }
}

export default Profile;


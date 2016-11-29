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
        this.displayName = 'Profile';
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
        let { id, avatar_url, gender_description, nick_name, latest_work, industrys, workinfos, eduinfos, bio, comments_count, comments } = data;

        console.log(data );
        this.setState({
            isloading: false,
            info:{
                id: id,
                avatar: avatar_url,
                gender: gender_description,
                nick_name: nick_name,
                latest_work: latest_work,
                industrys: industrys
            },
            resume: {
                works: workinfos,
                edus: eduinfos
            },
            mentor: {
                gender: gender_description,
                text: bio
            },
            comments: {
                count: comments_count,
                commentsData: comments
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
        const id = this.props.params.mentorId;
        this.fetchingData(`/api/mentors/${id}`);
    }

    render() {
        console.log("render started");
        console.log(this.state.isloading);
        let {isloading, info, resume, mentor, comments} = this.state;

        let content = isloading ? (<Loading />) : (
            <div>
                <Info data={info} />
                <Call />
                <Resume data={resume} />
                <Mentor data={mentor} />
                <Comments data={comments} />
                <Date />
            </div>
            );

        return (
            <div className='wrap-block--top-margin' >
                {content}
            </div>
            );
    }
}

export default Profile;


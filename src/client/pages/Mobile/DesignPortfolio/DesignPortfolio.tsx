import React from "react";
import "./DesignPortfolio.less";
import { setTimeout } from "timers";
import { WorkData } from "../../../works";
import Raising from "../../../components/Raising/Raising";
import WorkDetail from "../../../components/Mobile/WorkDetail/WorkDetail";
import WorkList from "../../../components/Mobile/WorkList/WorkList";

interface Props {
    page: number;
}

interface State {
    watchingWork: WorkData | undefined;
    workWindowZindex: number;
    watchingWork_opened: boolean;
    image: number;
}

export default class DesignPortfolio extends React.Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork_opened: false,
            watchingWork: undefined,
            workWindowZindex: -1,
            image: 0,
        };
    }

    pageCode = 3;

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work) this.setState({ watchingWork_opened: true, watchingWork: work, workWindowZindex: 50, image: 0 });
        else {
            this.setState({ watchingWork_opened: false });
            setTimeout(() => this.setState({ workWindowZindex: -1, watchingWork: undefined }), 600);
        }
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.page !== this.pageCode) {
            this.setState({ watchingWork_opened: false });
            setTimeout(() => this.setState({ workWindowZindex: -1, watchingWork: undefined }), 600);
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div
                className="design-portfolio-main-mobile"
                style={{
                    zIndex: page === this.pageCode ? 400 : -1,
                }}
            >
                <div className="des">
                    <Raising active={page === this.pageCode} delay={page === this.pageCode ? 1200 : 450}>
                        <h1 className="highlight1">設計作品</h1>
                    </Raising>
                    <Raising active={page === this.pageCode} height={108} delay={page === this.pageCode ? 1350 : 300}>
                        <p>為您精選四個過去的設計專案</p>
                        <p>點擊作品可以查看更詳細的內容哦！</p>
                    </Raising>
                    <Raising active={page === this.pageCode} delay={page === this.pageCode ? 1500 : 150}>
                        <p style={{ color: "gray" }}>
                            想看更多？歡迎查看我的 <a href="https://www.behance.net/yuanlinlin">Behence</a> 帳號
                        </p>
                    </Raising>
                </div>

                <WorkList
                    type="design"
                    show={page === this.pageCode}
                    watching_work={this.state.watchingWork}
                    toggle_watch_work={this.toggle_watch_work}
                />

                <WorkDetail
                    watching_work={this.state.watchingWork}
                    watchingWork_opened={this.state.watchingWork_opened}
                    work_window_zindex={this.state.workWindowZindex}
                    toggle_watch_work={this.toggle_watch_work}
                />
            </div>
        );
    }
}

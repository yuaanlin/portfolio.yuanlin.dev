import React from "react";
import "./DevPortfolio.less";
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
    watchingWork_opened: boolean;
    workWindowZindex: number;
    image: number;
}

export default class DevPortfolio extends React.Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    pageCode = 4;

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            image: 0,
            watchingWork_opened: false,
            watchingWork: undefined,
            workWindowZindex: -1,
        };
    }

    chage_image = (next: boolean) => {
        if (next) {
            if (this.state.image + 1 === this.state.watchingWork?.images.length) {
                this.setState({ image: 0 });
            } else this.setState({ image: this.state.image + 1 });
        } else {
            if (this.state.image === 0) {
                this.setState({ image: (this.state.watchingWork?.images.length ? this.state.watchingWork?.images.length : 1) - 1 });
            } else this.setState({ image: this.state.image - 1 });
        }
    };

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
                className="dev-portfolio-main-mobile"
                style={{
                    zIndex: page === this.pageCode ? 400 : -1,
                }}
            >
                <div className="des">
                    <Raising active={page === this.pageCode} delay={page === this.pageCode ? 600 : 450}>
                        <h1 className="highlight1">開發作品</h1>
                    </Raising>
                    <Raising active={page === this.pageCode} height={108} delay={page === this.pageCode ? 750 : 300}>
                        <p>為您精選六個過去的開發專案</p>
                        <p>點擊作品可以查看更詳細的諮詢</p>
                    </Raising>
                    <Raising active={page === this.pageCode} delay={page === this.pageCode ? 900 : 150}>
                        <p style={{ color: "gray" }}>
                            想看更多？歡迎查看我的 <a href="https://github.com/ken20001207">Github</a> 帳號
                        </p>
                    </Raising>
                </div>
                <WorkList
                    type="development"
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

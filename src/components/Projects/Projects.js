import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reality from "../../Assets/Projects/pro1.png";
import mikada from "../../Assets/Projects/pro2.png";
import phison from "../../Assets/Projects/pro3.png";
import capstone from "../../Assets/Projects/pro4.png";
import allure from "../../Assets/Projects/pro5.png";
import hillbottom from "../../Assets/Projects/pro6.png";
import saba from "../../Assets/Projects/pro7.png";
import freshbeans from "../../Assets/Projects/fresh_beans.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reality}
              title="Reality REAL STATE"
              description="Effortlessly Digitize the processes, Eliminating manual inefficiencies and enhancing operational agility.Digitize and optimise  enterprise and project management with solution."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mikada}
              title="Mikada Engineering and Trading"
              description="Supervise projects comprehensively through site diaries, scheduling, and reporting tools, ensuring adherence to contracts and schedules from concept to completion."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phison}
              title="Phison Real Estate S.C"
              description="Efficiently manage material lists, suppliers, and purchase requisitions, ensuring seamless procurement processes.Track inventory counts, manage goods received, transfers, and issues, maintaining precise control over stock levels."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstone}
              title="Capstone Engineering"
              description="Streamline HR operations by managing departments, employee data, leaves, payroll, attendance, performance, and policy adherence, simplifying processes from hiring to resignation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allure}
              title="Allure Construction PLC"
              description="Oversee financial operations comprehensively with bank account management, expense and revenue tracking, payment requests, and generation of detailed reports such as weekly summaries and transaction logs. Manage budgets, contracts, and chart of accounts for a complete financial overview."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hillbottom}
              title="Hillbottom Real Estate"
              description="Navigate leads, sales opportunities, and project sites efficiently through a centralized dashboard, enabling sales reports and effective management of waiting lists and plans."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saba}
              title="SABA Engineering Plc "
              description="Effectively handle fixed assets, including reception, transfers, and issues, ensuring accurate tracking of assets and associated fuel management."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reality}
              title="ACUTE Engineering Plc"
              description="Manage tasks, reports, schedules, payments, and alerts for seamless coordination and productive meetings."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mikada}
              title="EEIG Construction"
              description="Efficiently handle incoming and outgoing official communication and documents."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phison}
              title="K2N Architecture and Engineering Consultancy Plc"
              description="Access a suite of tools that cover various aspects of enterprise management, from finances to project oversight, all in one platform."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saba}
              title="Ovid Kling Consult"
              description="Optimize resources and workflows, empowering your teams to focus on high-impact tasks that drive growth."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freshbeans}
              title="Fresh Beans Coffee Trading PLC"
              description="From Ethiopia’s storied highlands, our coffee journey begins with hand-picked beans from regions like Sidamo, Harar, and Yirgacheffe, each bearing the rich legacy of our land."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import {FormattedMessage, useIntl} from "react-intl";
import {Avatar, Grid, Page} from "tabler-react";
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import siteMetaData from "../../constants/metadata";
import {useDispatch, useSelector} from "react-redux";
import CreateOrganizationButton from "../../components/organization/CreateOrganizationButton";
import {fetchOrganizationsList} from "../../actions/organizations";
import ShadowBox from "../../components/ShadowBox";
import moment from "moment/moment";
import UserOrganizationBadges from "../../components/organization/UserOrganizationBadges";
import UserOrganizationsInvitationsList from "../../components/organization/UserOrganizationsInvitationsList";
import UserTeamsInvitationsList from "../../components/team/UserTeamsInvitationsList";
import UserOrganizationsList from "../../components/organization/UserOrganizationsList";

//TODO: Lister les organisations de l'utilisateur dans un tableau
//TODO: Créer un boutton permettant de créer une organisation pour l'utilisateur
//TODO: Le button devrait ouvrier un modal permettant de créer une organisation
//TODO: Lister les invitations de l'utilisateur dans un tableau
const UserOrganizationsPage = () => {
  const intl = useIntl();
  const organizationsIntl = intl.formatMessage({ id: "nav.organizations" });
  const pageTitleIntl = intl.formatMessage({ id: "OrganizationsPage.title" });
  const { title, description } = siteMetaData;
  const dispatch = useDispatch();
  const userOrganizations = useSelector(state => state.organizations.userOrganizationsList);
  const activeUserSession = useSelector(state => state.userSession.activeUserSession);
  const userOrganizationsInvitations = useSelector(state => state.organizations.userOrganizationsInvitations);
  const userTeamsInvitations = useSelector(state => state.seasons.userTeamsInvitations);

  const {
    user: {
      gravatar_url,
      username,
      email,
      created_at,
    },
  } = activeUserSession || { user: {} };

  useEffect(() => {
    if (!userOrganizations) {
      dispatch(fetchOrganizationsList());
    }
  }, [userOrganizations, dispatch]);

  return (
    <>
    <Helmet>
      <title>
        {title} - {organizationsIntl}
      </title>
      <meta name="description" content={description} />
    </Helmet>
    <Page.Content title={pageTitleIntl}>
      <Grid.Row>
        <Grid.Col width={12} lg={4}>
          <h2 className="mb-4" css={{textAlign: "center"}}>
            My profile
          </h2>
          <ShadowBox>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {gravatar_url ? (
                <Avatar size="xxl" imageURL={`${gravatar_url}?d=identicon`} />
              ) : (
                <Avatar size="xxl" icon="users" />
              )}
              <h2 className="mb-0 mt-2">{username}</h2>
              <p>{email}</p>
              <h3>
                <FormattedMessage id="HomePage.createdAt" />
              </h3>
              <p>{moment(created_at).format("ll")}</p>
              <h3 className="mb-2 mt-2">
                <FormattedMessage id="HomePage.organizations" />
              </h3>
              <h3 className="mb-5 mt-0">
              <UserOrganizationBadges organizations={userOrganizations}/>
              </h3>
              <CreateOrganizationButton/>
            </div>
          </ShadowBox>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={8}>
          <h2 className="mb-4" css={{textAlign: "center"}}>
            My organizations
          </h2>
          <UserOrganizationsList
            userOrganizationsList={userOrganizations}
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12}>
          <h2 className="mb-4">
            <FormattedMessage id="OrganizationsPage.organizationsInvitations" />
          </h2>
          <UserOrganizationsInvitationsList
            userOrganizationsInvitationsList={userOrganizationsInvitations}
          />
          <h2 className="mb-4">
            <FormattedMessage id="OrganizationsPage.teamsInvitations" />
          </h2>
          <UserTeamsInvitationsList
            userTeamsInvitationsList={userTeamsInvitations}
          />
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
    </>
  );
};

export default React.memo(UserOrganizationsPage);

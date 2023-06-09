import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';

import AlignLeft02Icon from 'src/icons/untitled-ui/duocolor/align-left-02';

import Building04Icon from 'src/icons/untitled-ui/duocolor/building-04';
import CalendarIcon from 'src/icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from 'src/icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from 'src/icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from 'src/icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from 'src/icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from 'src/icons/untitled-ui/duocolor/graduation-hat-01';
import LineChartUp04Icon from 'src/icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from 'src/icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from 'src/icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from 'src/icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from 'src/icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from 'src/icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from 'src/icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from 'src/icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from 'src/icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from 'src/icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from 'src/icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from 'src/icons/untitled-ui/duocolor/upload-04';
import XSquareIcon from 'src/icons/untitled-ui/duocolor/x-square';


import BarChartSquare02Icon from 'src/icons/untitled-ui/duocolor/bar-chart-square-02';
import CampaignIcon from '@mui/icons-material/Campaign';


import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';

import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';

import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: t(tokens.nav.overview),
            path: paths.dashboard.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            )
          },
          {
            title: t(tokens.nav.mysite),
            path: paths.dashboard.content,
            icon: (
              <SvgIcon fontSize="small">
                <LayoutAlt02Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.manageMicrosite),
                path: paths.dashboard.microsite.index
              },
              {
                title: t(tokens.nav.analytics),
                path: paths.dashboard.analytics
              },
              {
                title: t(tokens.nav.sendContentMicrosite),
                path: paths.dashboard.microsite.contentApproval
              }
            ]
          },
          {
            title: t(tokens.nav.campaigns),
            path: paths.dashboard.campaigns,
            icon: (
              <SvgIcon fontSize="small">
                <CampaignIcon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.overview),
                path: paths.dashboard.campaigns.index
              },
              {
                title: t(tokens.nav.create),
                path: paths.dashboard.campaigns.create
              }
            ]
          },
          {
            title: t(tokens.nav.fileManager),
            path: paths.dashboard.fileManager,
            icon: (
              <SvgIcon fontSize="small">
                <Upload04Icon />
              </SvgIcon>
            )
          },

          {
          title: t(tokens.nav.policyManager),
          path: paths.dashboard.policyManager,
          icon: (
            <SvgIcon fontSize="small">
              <Upload04Icon />
            </SvgIcon>
          )
        },
          {
            title: t(tokens.nav.comissions),
            path: paths.dashboard.comissions.index,
            icon: (
              <SvgIcon fontSize="small">
                <BarChartSquare02Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.comissionsOverview),
                path: paths.dashboard.comissions.index
              },
              {
                title: t(tokens.nav.comissionsByPolicy),
                path: paths.dashboard.comissions.comissionByPolicy
              }
            ]
          },    
          {
            title: t(tokens.nav.leads),
            path: paths.dashboard.leads.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            )
          },
          {
            title: t(tokens.nav.clients),
            path: paths.dashboard.customers.index,
            icon: (
              <SvgIcon fontSize="small">
                <Users03Icon />
              </SvgIcon>
            )
          }
        ]
      }
    ];
  }, [t]);
};

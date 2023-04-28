import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShieldLockFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShieldLockFilledIcon = React.forwardRef<SVGSVGElement, TablerShieldLockFilledIconProps>(
	function TablerShieldLockFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShieldLockFilledIcon.displayName = "TablerShieldLockFilledIcon";
}

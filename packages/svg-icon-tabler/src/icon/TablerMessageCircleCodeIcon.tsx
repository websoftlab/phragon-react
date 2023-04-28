import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCircleCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCircleCodeIcon = React.forwardRef<SVGSVGElement, TablerMessageCircleCodeIconProps>(
	function TablerMessageCircleCodeIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M11.036 19.933a9.798 9.798 0 0 1 -3.336 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.128 1.815 3.053 4.361 2.694 6.81" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageCircleCodeIcon.displayName = "TablerMessageCircleCodeIcon";
}

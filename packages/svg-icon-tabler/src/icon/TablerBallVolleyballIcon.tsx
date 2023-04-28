import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallVolleyballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallVolleyballIcon = React.forwardRef<SVGSVGElement, TablerBallVolleyballIconProps>(
	function TablerBallVolleyballIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 12a8 8 0 0 0 8 4" />
				<path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
				<path d="M12 12a8 8 0 0 0 -7.464 4.928" />
				<path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
				<path d="M12 12a8 8 0 0 0 -.536 -8.928" />
				<path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallVolleyballIcon.displayName = "TablerBallVolleyballIcon";
}

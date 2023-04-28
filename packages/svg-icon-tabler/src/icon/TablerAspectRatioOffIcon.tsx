import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAspectRatioOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAspectRatioOffIcon = React.forwardRef<SVGSVGElement, TablerAspectRatioOffIconProps>(
	function TablerAspectRatioOffIcon(props, ref) {
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
				<path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
				<path d="M7 12v-3h2" />
				<path d="M17 12v1m-2 2h-1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAspectRatioOffIcon.displayName = "TablerAspectRatioOffIcon";
}

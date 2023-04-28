import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmokingNoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmokingNoIcon = React.forwardRef<SVGSVGElement, TablerSmokingNoIconProps>(
	function TablerSmokingNoIcon(props, ref) {
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
				<path d="M8 13l0 4" />
				<path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
				<path d="M3 3l18 18" />
				<path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSmokingNoIcon.displayName = "TablerSmokingNoIcon";
}

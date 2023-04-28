import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTallymarksIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTallymarksIcon = React.forwardRef<SVGSVGElement, TablerTallymarksIconProps>(
	function TablerTallymarksIcon(props, ref) {
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
				<path d="M6 5l0 14" />
				<path d="M10 5l0 14" />
				<path d="M14 5l0 14" />
				<path d="M18 5l0 14" />
				<path d="M3 17l18 -10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTallymarksIcon.displayName = "TablerTallymarksIcon";
}

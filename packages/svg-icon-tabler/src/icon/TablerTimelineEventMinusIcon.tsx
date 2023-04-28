import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTimelineEventMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTimelineEventMinusIcon = React.forwardRef<SVGSVGElement, TablerTimelineEventMinusIconProps>(
	function TablerTimelineEventMinusIcon(props, ref) {
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
				<path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M10 20h-6" />
				<path d="M14 20h6" />
				<path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z" />
				<path d="M10 8h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTimelineEventMinusIcon.displayName = "TablerTimelineEventMinusIcon";
}

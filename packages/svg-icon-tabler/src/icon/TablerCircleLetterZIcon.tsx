import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleLetterZIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleLetterZIcon = React.forwardRef<SVGSVGElement, TablerCircleLetterZIconProps>(
	function TablerCircleLetterZIcon(props, ref) {
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
				<path d="M10 8h4l-4 8h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleLetterZIcon.displayName = "TablerCircleLetterZIcon";
}
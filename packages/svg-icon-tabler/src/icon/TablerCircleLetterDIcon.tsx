import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleLetterDIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleLetterDIcon = React.forwardRef<SVGSVGElement, TablerCircleLetterDIconProps>(
	function TablerCircleLetterDIcon(props, ref) {
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
				<path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleLetterDIcon.displayName = "TablerCircleLetterDIcon";
}

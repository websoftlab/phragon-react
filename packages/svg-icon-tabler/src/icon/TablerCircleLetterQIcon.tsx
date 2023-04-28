import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleLetterQIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleLetterQIcon = React.forwardRef<SVGSVGElement, TablerCircleLetterQIconProps>(
	function TablerCircleLetterQIcon(props, ref) {
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
				<path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
				<path d="M13 15l1 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleLetterQIcon.displayName = "TablerCircleLetterQIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHighlightOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHighlightOffIcon = React.forwardRef<SVGSVGElement, TablerHighlightOffIconProps>(
	function TablerHighlightOffIcon(props, ref) {
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
				<path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" />
				<path d="M12.5 5.5l4 4" />
				<path d="M4.5 13.5l4 4" />
				<path d="M19 15h2v2m-2 2h-6l3 -3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHighlightOffIcon.displayName = "TablerHighlightOffIcon";
}

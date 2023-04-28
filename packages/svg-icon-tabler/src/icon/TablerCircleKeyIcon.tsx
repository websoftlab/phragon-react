import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleKeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleKeyIcon = React.forwardRef<SVGSVGElement, TablerCircleKeyIconProps>(
	function TablerCircleKeyIcon(props, ref) {
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
				<path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M12.5 11.5l-4 4l1.5 1.5" />
				<path d="M12 15l-1.5 -1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleKeyIcon.displayName = "TablerCircleKeyIcon";
}

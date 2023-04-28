import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextResizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextResizeIcon = React.forwardRef<SVGSVGElement, TablerTextResizeIconProps>(
	function TablerTextResizeIcon(props, ref) {
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
				<path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 7v10" />
				<path d="M7 5h10" />
				<path d="M7 19h10" />
				<path d="M19 7v10" />
				<path d="M10 10h4" />
				<path d="M12 14v-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextResizeIcon.displayName = "TablerTextResizeIcon";
}

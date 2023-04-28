import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBorderVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBorderVerticalIcon = React.forwardRef<SVGSVGElement, TablerBorderVerticalIconProps>(
	function TablerBorderVerticalIcon(props, ref) {
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
				<path d="M12 4l0 16" />
				<path d="M4 4l0 .01" />
				<path d="M8 4l0 .01" />
				<path d="M16 4l0 .01" />
				<path d="M20 4l0 .01" />
				<path d="M4 8l0 .01" />
				<path d="M20 8l0 .01" />
				<path d="M4 12l0 .01" />
				<path d="M8 12l0 .01" />
				<path d="M16 12l0 .01" />
				<path d="M20 12l0 .01" />
				<path d="M4 16l0 .01" />
				<path d="M20 16l0 .01" />
				<path d="M4 20l0 .01" />
				<path d="M8 20l0 .01" />
				<path d="M16 20l0 .01" />
				<path d="M20 20l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBorderVerticalIcon.displayName = "TablerBorderVerticalIcon";
}

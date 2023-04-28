import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBorderBottomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBorderBottomIcon = React.forwardRef<SVGSVGElement, TablerBorderBottomIconProps>(
	function TablerBorderBottomIcon(props, ref) {
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
				<path d="M20 20l-16 0" />
				<path d="M4 4l0 .01" />
				<path d="M8 4l0 .01" />
				<path d="M12 4l0 .01" />
				<path d="M16 4l0 .01" />
				<path d="M20 4l0 .01" />
				<path d="M4 8l0 .01" />
				<path d="M12 8l0 .01" />
				<path d="M20 8l0 .01" />
				<path d="M4 12l0 .01" />
				<path d="M8 12l0 .01" />
				<path d="M12 12l0 .01" />
				<path d="M16 12l0 .01" />
				<path d="M20 12l0 .01" />
				<path d="M4 16l0 .01" />
				<path d="M12 16l0 .01" />
				<path d="M20 16l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBorderBottomIcon.displayName = "TablerBorderBottomIcon";
}

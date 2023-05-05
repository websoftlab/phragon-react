import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScreenShareOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScreenShareOffIcon = React.forwardRef<SVGSVGElement, TablerScreenShareOffIconProps>(
	function TablerScreenShareOffIcon(props, ref) {
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
				<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
				<path d="m22 3-5 5" />
				<path d="m17 3 5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScreenShareOffIcon.displayName = "TablerScreenShareOffIcon";
}

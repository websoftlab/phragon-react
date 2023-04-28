import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPresentationOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPresentationOffIcon = React.forwardRef<SVGSVGElement, TablerPresentationOffIconProps>(
	function TablerPresentationOffIcon(props, ref) {
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
				<path d="M3 4h1m4 0h13" />
				<path d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" />
				<path d="M12 16v4" />
				<path d="M9 20h6" />
				<path d="M8 12l2 -2m4 0l2 -2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPresentationOffIcon.displayName = "TablerPresentationOffIcon";
}

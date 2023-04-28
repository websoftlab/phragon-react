import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWiperWashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWiperWashIcon = React.forwardRef<SVGSVGElement, TablerWiperWashIconProps>(
	function TablerWiperWashIcon(props, ref) {
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
				<path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
				<path d="M12 20l0 -14" />
				<path d="M4 6a4 4 0 0 1 .4 -1.8" />
				<path d="M7 2.1a4 4 0 0 1 2 0" />
				<path d="M12 6a4 4 0 0 0 -.4 -1.8" />
				<path d="M12 6a4 4 0 0 1 .4 -1.8" />
				<path d="M15 2.1a4 4 0 0 1 2 0" />
				<path d="M20 6a4 4 0 0 0 -.4 -1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWiperWashIcon.displayName = "TablerWiperWashIcon";
}

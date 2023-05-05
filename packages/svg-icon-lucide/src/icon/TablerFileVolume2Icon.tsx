import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileVolume2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileVolume2Icon = React.forwardRef<SVGSVGElement, TablerFileVolume2IconProps>(
	function TablerFileVolume2Icon(props, ref) {
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
				<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5" />
				<path d="M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3" />
				<path d="M8 15h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileVolume2Icon.displayName = "TablerFileVolume2Icon";
}

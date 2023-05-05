import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestTube2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestTube2Icon = React.forwardRef<SVGSVGElement, TablerTestTube2IconProps>(
	function TablerTestTube2Icon(props, ref) {
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
				<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" />
				<path d="m16 2 6 6" />
				<path d="M12 16H4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTestTube2Icon.displayName = "TablerTestTube2Icon";
}

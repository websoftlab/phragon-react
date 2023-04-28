import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestPipe2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestPipe2Icon = React.forwardRef<SVGSVGElement, TablerTestPipe2IconProps>(
	function TablerTestPipe2Icon(props, ref) {
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
				<path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
				<path d="M9 12h6" />
				<path d="M8 3h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTestPipe2Icon.displayName = "TablerTestPipe2Icon";
}

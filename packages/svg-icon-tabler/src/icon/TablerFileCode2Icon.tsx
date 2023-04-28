import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileCode2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileCode2Icon = React.forwardRef<SVGSVGElement, TablerFileCode2IconProps>(
	function TablerFileCode2Icon(props, ref) {
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
				<path d="M10 12h-1v5h1" />
				<path d="M14 12h1v5h-1" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileCode2Icon.displayName = "TablerFileCode2Icon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTallymark2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTallymark2Icon = React.forwardRef<SVGSVGElement, TablerTallymark2IconProps>(
	function TablerTallymark2Icon(props, ref) {
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
				<path d="M10 5l0 14" />
				<path d="M14 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTallymark2Icon.displayName = "TablerTallymark2Icon";
}

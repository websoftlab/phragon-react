import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileVideo2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileVideo2Icon = React.forwardRef<SVGSVGElement, TablerFileVideo2IconProps>(
	function TablerFileVideo2Icon(props, ref) {
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
				<path d="M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="m10 15.5 4 2.5v-6l-4 2.5" />
				<path d="M3 12 H9 A1 1 0 0 1 10 13 V17 A1 1 0 0 1 9 18 H3 A1 1 0 0 1 2 17 V13 A1 1 0 0 1 3 12 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileVideo2Icon.displayName = "TablerFileVideo2Icon";
}

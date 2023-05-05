import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMic2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMic2Icon = React.forwardRef<SVGSVGElement, TablerMic2IconProps>(function TablerMic2Icon(props, ref) {
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
			<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
			<path d="M22 7 A5 5 0 0 1 17 12 A5 5 0 0 1 12 7 A5 5 0 0 1 22 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMic2Icon.displayName = "TablerMic2Icon";
}

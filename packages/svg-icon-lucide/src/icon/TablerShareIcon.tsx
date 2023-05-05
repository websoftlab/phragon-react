import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShareIcon = React.forwardRef<SVGSVGElement, TablerShareIconProps>(function TablerShareIcon(
	props,
	ref
) {
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
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<path d="M16 6 L12 2 L8 6" />
			<path d="M12 2 L12 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShareIcon.displayName = "TablerShareIcon";
}

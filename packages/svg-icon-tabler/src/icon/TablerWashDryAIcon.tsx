import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashDryAIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashDryAIcon = React.forwardRef<SVGSVGElement, TablerWashDryAIconProps>(function TablerWashDryAIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M9 16v-4.8c0 -1.657 1.343 -3.2 3 -3.2s3 1.543 3 3.2v4.8" />
			<path d="M15 13h-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWashDryAIcon.displayName = "TablerWashDryAIcon";
}
